(function () {
  var API_URL = 'https://avo-api.vinfastownersorg.workers.dev';

  function updateUI(data) {
    var html = document.documentElement;
    var loginBtn = document.getElementById('auth-login');
    var logoutBtn = document.getElementById('auth-logout');
    var userInfo = document.getElementById('auth-user');
    var avatar = document.getElementById('auth-avatar');
    var displayName = document.getElementById('auth-display-name');

    if (data.authenticated) {
      html.setAttribute('data-auth-tier', data.user.tier);
      if (loginBtn) loginBtn.style.display = 'none';
      if (logoutBtn) logoutBtn.style.display = '';
      if (userInfo) userInfo.style.display = '';
      if (avatar && data.user.avatar) {
        avatar.src = data.user.avatar;
        avatar.alt = data.user.displayName;
      }
      if (displayName) displayName.textContent = data.user.displayName;
    } else {
      html.setAttribute('data-auth-tier', 'public');
      if (loginBtn) loginBtn.style.display = '';
      if (logoutBtn) logoutBtn.style.display = 'none';
      if (userInfo) userInfo.style.display = 'none';
    }
  }

  fetch(API_URL + '/auth/me', { credentials: 'include' })
    .then(function (r) { return r.json(); })
    .then(updateUI)
    .catch(function () {
      document.documentElement.setAttribute('data-auth-tier', 'public');
    });
})();
