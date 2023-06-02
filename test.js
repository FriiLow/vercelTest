const t = new URLSearchParams(window.location.search);
    const user = t.get('user');
    const tt = document.getElementById('testT');
    tt.innerHTML = `Test ${user}!`;