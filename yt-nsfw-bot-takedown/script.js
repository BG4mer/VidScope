const VERSION = 'v2.0.0';
const HISTORY_KEY = 'ytReports';
const MODAL_KEY = 'hideWarning';

const channelInput = document.getElementById('channelInput');
const locationInput = document.getElementById('locationInput');
const output = document.getElementById('output');
const historyList = document.getElementById('historyList');
const toast = document.getElementById('toast');
const modal = document.getElementById('modal');

document.querySelector('.version').textContent = VERSION;

// INIT
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem(MODAL_KEY)) modal.classList.remove('hidden');
  renderHistory();
});

// REPORT
document.getElementById('generateBtn').onclick = () => {
  const link = channelInput.value.trim();
  if (!isValidYouTube(link)) {
    notify('Invalid YouTube channel URL');
    return;
  }

  const now = new Date().toLocaleString();
  const report =
`Hello YouTube Trust & Safety Team,

I am reporting a channel that appears to be a bot account promoting adult content through its subscriptions or profile presentation.

Channel link:
${link}

Observed location:
${locationInput.value}

This activity may expose inappropriate material to a general audience, including minors. I respectfully request a review under YouTube’s Community Guidelines.

Thank you for your time.

Sincerely,
A concerned user
Reported on: ${now}`;

  output.value = report;
  saveHistory({ link, date: now });
  notify('Report generated');
};

// GMAIL
document.getElementById('gmailBtn').onclick = () => {
  if (!output.value) return;
  const url =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=trustandsafety@youtube.com` +
    `&su=${encodeURIComponent('Potential NSFW bot channel report')}` +
    `&body=${encodeURIComponent(output.value)}`;
  window.open(url, '_blank');
};

// COPY
document.getElementById('copyBtn').onclick = () => {
  navigator.clipboard.writeText(output.value);
  notify('Copied to clipboard');
};

// MODAL
document.getElementById('confirmModal').onclick = () => {
  if (document.getElementById('dontShow').checked) {
    localStorage.setItem(MODAL_KEY, 'true');
  }
  modal.classList.add('hidden');
};

// HISTORY
function saveHistory(entry) {
  const data = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  if (!data.find(e => e.link === entry.link)) {
    data.unshift(entry);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(data.slice(0, 50)));
  }
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = '';
  const data = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  if (!data.length) {
    historyList.innerHTML = '<li>No reports yet</li>';
    return;
  }
  data.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.link} — ${r.date}`;
    historyList.appendChild(li);
  });
}

// UTIL
function isValidYouTube(url) {
  return /^https?:\/\/(www\.)?youtube\.com\/(@|channel\/)/.test(url);
}

function notify(text) {
  toast.textContent = text;
  toast.style.opacity = '1';
  setTimeout(() => toast.style.opacity = '0', 2000);
}
