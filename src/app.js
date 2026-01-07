/**
 * ELDiB Digital - Hauptanwendung
 * Entwicklungspädagogischer Lernziel-Diagnose-Bogen
 */

import { ELDIB_DATA } from './data/eldibData.js';
import { INTERVENTIONS, createGoalStatement } from './data/interventions.js';

// ========================================
// State Management
// ========================================
const state = {
  student: {
    name: '',
    birthDate: '',
    foerderort: '',
    klasse: '',
    assessmentDate: '',
    assessorName: '',
    notes: ''
  },
  assessments: {},
  goals: {},
  currentDomain: 'verhalten'
};

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  initializeAssessments();
  loadFromLocalStorage();
  renderAssessmentMatrix('verhalten');
  setupEventListeners();
  updateVisualization();
});

function initializeAssessments() {
  Object.keys(ELDIB_DATA).forEach(domain => {
    state.assessments[domain] = {};
    ELDIB_DATA[domain].stufen.forEach(stufe => {
      stufe.items.forEach(item => {
        state.assessments[domain][item.id] = null; // null = nicht bewertet, 'erreicht', 'nicht-erreicht', 'ziel'
      });
    });
  });
}

function setupEventListeners() {
  // Student form auto-save
  const formInputs = document.querySelectorAll('#studentForm input, #studentForm textarea');
  formInputs.forEach(input => {
    input.addEventListener('change', saveStudentData);
    input.addEventListener('input', debounce(saveStudentData, 500));
  });
}

// ========================================
// Tab Navigation
// ========================================
window.switchTab = function(tabId) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Update tab content
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.toggle('active', content.id === `tab-${tabId}`);
  });

  // Special handling for visualization tab
  if (tabId === 'visualisierung') {
    updateVisualization();
  }
};

window.switchDomain = function(domain) {
  state.currentDomain = domain;

  // Update domain tabs
  document.querySelectorAll('.domain-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.domain === domain);
  });

  renderAssessmentMatrix(domain);
};

// ========================================
// Assessment Matrix Rendering
// ========================================
function renderAssessmentMatrix(domain) {
  const container = document.getElementById('assessmentMatrix');
  const domainData = ELDIB_DATA[domain];
  const color = domainData.color;

  let html = '';

  domainData.stufen.forEach((stufe, index) => {
    const isExpanded = index === 0; // First stage expanded by default

    html += `
      <div class="stage-section ${isExpanded ? 'expanded' : ''}" data-stage="${stufe.nummer}" style="--domain-color: ${color}">
        <div class="stage-header" onclick="toggleStage(this)">
          <div class="stage-info">
            <h4>Stufe ${stufe.nummer}: ${stufe.stufenziel}</h4>
            <p>${stufe.bereichsziel}</p>
          </div>
          <span class="stage-toggle">&#9660;</span>
        </div>
        <div class="stage-items">
          ${stufe.items.map(item => renderItemRow(domain, item, color)).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderItemRow(domain, item, color) {
  const status = state.assessments[domain][item.id];

  return `
    <div class="item-row" data-item-id="${item.id}" style="--domain-color: ${color}">
      <div class="item-info">
        <span class="item-code">${item.id}</span>
        <span class="item-name">${item.name}</span>
        <span class="item-description">${item.beschreibung}</span>
      </div>
      <div class="item-actions">
        <button class="status-btn ${status === 'erreicht' ? 'erreicht' : ''}"
                onclick="setStatus('${domain}', '${item.id}', 'erreicht')"
                title="Erreicht">
          &#10003;
        </button>
        <button class="status-btn ${status === 'nicht-erreicht' ? 'nicht-erreicht' : ''}"
                onclick="setStatus('${domain}', '${item.id}', 'nicht-erreicht')"
                title="Nicht erreicht">
          &#10007;
        </button>
        <button class="status-btn ${status === 'ziel' ? 'ziel' : ''}"
                onclick="setStatus('${domain}', '${item.id}', 'ziel')"
                title="Aktuelles Ziel">
          &#9733;
        </button>
        <button class="goal-btn" onclick="openGoalModal('${domain}', '${item.id}')" title="Zielformulierung">
          &#128221;
        </button>
      </div>
    </div>
  `;
}

window.toggleStage = function(header) {
  const section = header.closest('.stage-section');
  section.classList.toggle('expanded');
};

window.setStatus = function(domain, itemId, status) {
  // Toggle status if clicking same button
  if (state.assessments[domain][itemId] === status) {
    state.assessments[domain][itemId] = null;
  } else {
    state.assessments[domain][itemId] = status;
  }

  saveToLocalStorage();
  renderAssessmentMatrix(domain);
  updateVisualization();
};

// ========================================
// Goal Modal
// ========================================
window.openGoalModal = function(domain, itemId) {
  const item = findItem(domain, itemId);
  const domainData = ELDIB_DATA[domain];
  const interventionData = INTERVENTIONS[domain];
  const stufe = findItemStage(domain, itemId);

  const goalStatement = createGoalStatement(domain, item, state.student.name || '[Name]');
  const stufenInterventionen = interventionData.stufen[stufe.nummer] || {};

  const modalBody = document.getElementById('goalModalBody');
  modalBody.innerHTML = `
    <div class="goal-form" data-domain="${domain}" data-item-id="${itemId}">
      <div class="form-group">
        <label>Entwicklungsbereich</label>
        <p><strong style="color: ${domainData.color}">${domainData.name}</strong> - Stufe ${stufe.nummer}</p>
      </div>

      <div class="form-group">
        <label>Item</label>
        <p><strong>${item.id}: ${item.name}</strong></p>
        <p style="font-size: 0.875rem; color: var(--color-text-muted)">${item.beschreibung}</p>
      </div>

      <div class="form-group">
        <label>SMART-Zielformulierung (Vorschlag)</label>
        <textarea id="goalText" rows="4">${goalStatement.ziel}</textarea>
      </div>

      <div class="form-group">
        <label>Interventionsvorschläge</label>
        <div style="background: var(--color-bg); padding: var(--spacing-md); border-radius: var(--radius-md);">
          <p style="font-weight: 500; margin-bottom: var(--spacing-sm);">Fokus: ${stufenInterventionen.fokus || 'Keine spezifischen Hinweise'}</p>
          <ul class="intervention-list">
            ${(stufenInterventionen.interventionen || []).map(i => `<li>${i}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="form-group">
        <label>Materialien</label>
        <p style="font-size: 0.875rem; color: var(--color-text-muted)">
          ${(stufenInterventionen.materialien || []).join(', ') || 'Keine spezifischen Materialien'}
        </p>
      </div>

      <div class="form-group">
        <label>Eigene Notizen zur Intervention</label>
        <textarea id="interventionNotes" rows="3" placeholder="Ihre Notizen zur Umsetzung...">${state.goals[itemId]?.notes || ''}</textarea>
      </div>
    </div>
  `;

  document.getElementById('goalModal').classList.add('active');
};

window.closeGoalModal = function() {
  document.getElementById('goalModal').classList.remove('active');
};

window.saveGoal = function() {
  const form = document.querySelector('.goal-form');
  const domain = form.dataset.domain;
  const itemId = form.dataset.itemId;

  state.goals[itemId] = {
    goalText: document.getElementById('goalText').value,
    notes: document.getElementById('interventionNotes').value,
    timestamp: new Date().toISOString()
  };

  saveToLocalStorage();
  closeGoalModal();
};

// ========================================
// PEI Report Generation
// ========================================
window.generateReport = function() {
  const reportContainer = document.getElementById('peiReport');

  // Collect data for each domain
  const reportData = {};

  Object.keys(ELDIB_DATA).forEach(domain => {
    const erreicht = [];
    const ziele = [];

    ELDIB_DATA[domain].stufen.forEach(stufe => {
      stufe.items.forEach(item => {
        const status = state.assessments[domain][item.id];
        if (status === 'erreicht') {
          erreicht.push({ ...item, stufe: stufe.nummer });
        } else if (status === 'ziel') {
          ziele.push({ ...item, stufe: stufe.nummer, goal: state.goals[item.id] });
        }
      });
    });

    reportData[domain] = {
      erreicht: erreicht.slice(-4), // Letzte 4 erreichten
      ziele: ziele.slice(0, 4), // Erste 4 Ziele
      domainData: ELDIB_DATA[domain],
      interventions: INTERVENTIONS[domain]
    };
  });

  // Generate HTML
  let html = `
    <div class="report-container">
      <div class="report-header">
        <h2>Individueller Entwicklungsplan (PEI)</h2>
        <div class="student-name">${state.student.name || 'Name nicht angegeben'}</div>
        <div class="report-meta">
          <span>Geburtsdatum: ${formatDate(state.student.birthDate) || '-'}</span>
          <span>Einschätzung: ${formatDate(state.student.assessmentDate) || '-'}</span>
          <span>Förderort: ${state.student.foerderort || '-'}</span>
        </div>
      </div>

      <div class="report-body">
  `;

  // Add sections for each domain
  Object.keys(reportData).forEach(domain => {
    const data = reportData[domain];
    const color = data.domainData.color;

    html += `
      <div class="report-section" style="--domain-color: ${color}">
        <h3>
          <span class="domain-indicator"></span>
          ${data.domainData.name}
        </h3>

        <div class="achievement-grid">
          <div>
            <h4 style="color: var(--color-erreicht); margin-bottom: var(--spacing-md);">Erreichte Kompetenzen</h4>
            ${data.erreicht.length > 0 ? data.erreicht.map(item => `
              <div class="achievement-card" style="--domain-color: ${color}">
                <h5>${item.id}: ${item.name}</h5>
                <p>${item.beschreibung}</p>
              </div>
            `).join('') : '<p style="color: var(--color-text-muted); font-size: 0.875rem;">Keine Items als erreicht markiert</p>'}
          </div>

          <div>
            <h4 style="color: var(--color-ziel); margin-bottom: var(--spacing-md);">Aktuelle Ziele</h4>
            ${data.ziele.length > 0 ? data.ziele.map(item => `
              <div class="achievement-card goal-card">
                <h5>${item.id}: ${item.name}</h5>
                <p>${item.beschreibung}</p>
                ${item.goal?.goalText ? `<p style="margin-top: var(--spacing-sm); font-style: italic; color: var(--color-ziel);">${item.goal.goalText}</p>` : ''}
              </div>
            `).join('') : '<p style="color: var(--color-text-muted); font-size: 0.875rem;">Keine Ziele definiert</p>'}
          </div>
        </div>

        ${data.ziele.length > 0 ? `
          <div class="goal-section">
            <h4>&#128161; Interventionsempfehlungen</h4>
            <ul class="intervention-list">
              ${getRelevantInterventions(data.interventions, data.ziele).map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `;
  });

  html += `
      </div>

      <div style="padding: var(--spacing-xl); border-top: 1px solid var(--color-border); text-align: center; color: var(--color-text-muted); font-size: 0.75rem;">
        <p>Erstellt am ${new Date().toLocaleDateString('de-DE')} | ELDiB Digital - CDSE</p>
        <p>Einschätzende Person: ${state.student.assessorName || '-'}</p>
      </div>
    </div>
  `;

  reportContainer.innerHTML = html;
  switchTab('bericht');
};

function getRelevantInterventions(interventions, ziele) {
  const stufen = [...new Set(ziele.map(z => z.stufe))];
  let allInterventions = [];

  stufen.forEach(stufe => {
    if (interventions.stufen[stufe]) {
      allInterventions = allInterventions.concat(interventions.stufen[stufe].interventionen.slice(0, 3));
    }
  });

  return [...new Set(allInterventions)].slice(0, 6);
}

// ========================================
// Visualization
// ========================================
function updateVisualization() {
  updateProgressBars();
  updateRadarChart();
  updateStageOverview();
  updateCDSEDocument();
}

function updateProgressBars() {
  const container = document.getElementById('progressBars');
  if (!container) return;

  let html = '';

  Object.keys(ELDIB_DATA).forEach(domain => {
    const data = ELDIB_DATA[domain];
    const total = Object.keys(state.assessments[domain]).length;
    const erreicht = Object.values(state.assessments[domain]).filter(s => s === 'erreicht').length;
    const percentage = total > 0 ? Math.round((erreicht / total) * 100) : 0;

    html += `
      <div class="progress-item">
        <div class="progress-label">
          <span>${data.name}</span>
          <span>${erreicht}/${total} (${percentage}%)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${percentage}%; background: ${data.color}"></div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function updateRadarChart() {
  const canvas = document.getElementById('radarChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  // Destroy existing chart if exists
  if (window.radarChartInstance) {
    window.radarChartInstance.destroy();
  }

  const labels = [];
  const data = [];
  const colors = [];

  Object.keys(ELDIB_DATA).forEach(domain => {
    const domainData = ELDIB_DATA[domain];
    const total = Object.keys(state.assessments[domain]).length;
    const erreicht = Object.values(state.assessments[domain]).filter(s => s === 'erreicht').length;

    labels.push(domainData.name);
    data.push(total > 0 ? Math.round((erreicht / total) * 100) : 0);
    colors.push(domainData.color);
  });

  window.radarChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Entwicklungsstand (%)',
        data: data,
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        borderColor: 'rgba(52, 152, 219, 1)',
        borderWidth: 2,
        pointBackgroundColor: colors,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: colors
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function updateStageOverview() {
  const container = document.getElementById('stageOverview');
  if (!container) return;

  let html = '';

  Object.keys(ELDIB_DATA).forEach(domain => {
    const data = ELDIB_DATA[domain];

    html += `
      <div class="stage-column">
        <h4 style="background: ${data.color}">${data.name}</h4>
        ${data.stufen.map(stufe => `
          <div style="margin-bottom: var(--spacing-sm);">
            <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-bottom: var(--spacing-xs);">Stufe ${stufe.nummer}</div>
            <div class="stage-dots">
              ${stufe.items.map(item => {
                const status = state.assessments[domain][item.id];
                return `<div class="stage-dot ${status || ''}" title="${item.name}"></div>`;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  });

  container.innerHTML = html;
}

function updateCDSEDocument() {
  const container = document.getElementById('cdseDocument');
  if (!container) return;

  let html = '<div class="cdse-grid">';

  Object.keys(ELDIB_DATA).forEach(domain => {
    const data = ELDIB_DATA[domain];
    const erreicht = [];
    const ziele = [];

    data.stufen.forEach(stufe => {
      stufe.items.forEach(item => {
        const status = state.assessments[domain][item.id];
        if (status === 'erreicht') erreicht.push(item);
        if (status === 'ziel') ziele.push(item);
      });
    });

    html += `
      <div class="cdse-domain">
        <div class="cdse-domain-header" style="background: ${data.color}">
          ${data.name}
        </div>
        <div class="cdse-domain-body">
          <div class="cdse-section">
            <h5>Erreichte Kompetenzen (${erreicht.length})</h5>
            ${erreicht.slice(-4).map(item => `
              <div class="cdse-item">${item.name}</div>
            `).join('') || '<div class="cdse-item" style="color: var(--color-text-light);">-</div>'}
          </div>
          <div class="cdse-section">
            <h5>Aktuelle Ziele (${ziele.length})</h5>
            ${ziele.slice(0, 4).map(item => `
              <div class="cdse-item highlight">${item.name}</div>
            `).join('') || '<div class="cdse-item" style="color: var(--color-text-light);">-</div>'}
          </div>
        </div>
      </div>
    `;
  });

  html += '</div>';

  // Add summary
  const totalItems = Object.keys(ELDIB_DATA).reduce((sum, domain) => {
    return sum + Object.keys(state.assessments[domain]).length;
  }, 0);

  const totalErreicht = Object.keys(ELDIB_DATA).reduce((sum, domain) => {
    return sum + Object.values(state.assessments[domain]).filter(s => s === 'erreicht').length;
  }, 0);

  const totalZiele = Object.keys(ELDIB_DATA).reduce((sum, domain) => {
    return sum + Object.values(state.assessments[domain]).filter(s => s === 'ziel').length;
  }, 0);

  html += `
    <div style="margin-top: var(--spacing-xl); padding: var(--spacing-lg); background: var(--color-bg); border-radius: var(--radius-md); display: flex; justify-content: space-around; text-align: center;">
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--color-erreicht)">${totalErreicht}</div>
        <div style="font-size: 0.875rem; color: var(--color-text-muted)">Erreichte Items</div>
      </div>
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--color-ziel)">${totalZiele}</div>
        <div style="font-size: 0.875rem; color: var(--color-text-muted)">Aktuelle Ziele</div>
      </div>
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--color-text)">${totalItems}</div>
        <div style="font-size: 0.875rem; color: var(--color-text-muted)">Items Gesamt</div>
      </div>
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--color-kommunikation)">${Math.round((totalErreicht / totalItems) * 100)}%</div>
        <div style="font-size: 0.875rem; color: var(--color-text-muted)">Fortschritt</div>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

// ========================================
// Export Functions
// ========================================
window.exportPDF = function() {
  // Generate report first
  generateReport();

  // Use browser print functionality
  setTimeout(() => {
    window.print();
  }, 500);
};

// ========================================
// Helper Functions
// ========================================
function findItem(domain, itemId) {
  for (const stufe of ELDIB_DATA[domain].stufen) {
    const item = stufe.items.find(i => i.id === itemId);
    if (item) return item;
  }
  return null;
}

function findItemStage(domain, itemId) {
  for (const stufe of ELDIB_DATA[domain].stufen) {
    if (stufe.items.find(i => i.id === itemId)) {
      return stufe;
    }
  }
  return null;
}

function formatDate(dateString) {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString('de-DE');
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// Local Storage
// ========================================
function saveStudentData() {
  state.student = {
    name: document.getElementById('studentName')?.value || '',
    birthDate: document.getElementById('birthDate')?.value || '',
    foerderort: document.getElementById('foerderort')?.value || '',
    klasse: document.getElementById('klasse')?.value || '',
    assessmentDate: document.getElementById('assessmentDate')?.value || '',
    assessorName: document.getElementById('assessorName')?.value || '',
    notes: document.getElementById('notes')?.value || ''
  };
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const data = {
    student: state.student,
    assessments: state.assessments,
    goals: state.goals,
    timestamp: new Date().toISOString()
  };
  localStorage.setItem('eldib_data', JSON.stringify(data));
}

function loadFromLocalStorage() {
  const saved = localStorage.getItem('eldib_data');
  if (saved) {
    try {
      const data = JSON.parse(saved);

      // Load student data
      if (data.student) {
        state.student = data.student;
        Object.keys(data.student).forEach(key => {
          const element = document.getElementById(key === 'name' ? 'studentName' : key);
          if (element) element.value = data.student[key] || '';
        });
      }

      // Load assessments
      if (data.assessments) {
        Object.keys(data.assessments).forEach(domain => {
          if (state.assessments[domain]) {
            Object.assign(state.assessments[domain], data.assessments[domain]);
          }
        });
      }

      // Load goals
      if (data.goals) {
        state.goals = data.goals;
      }
    } catch (e) {
      console.error('Error loading saved data:', e);
    }
  }
}

// Export state for debugging
window.eldibState = state;
