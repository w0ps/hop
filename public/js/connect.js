var socket = io.connect('/');

socket.on('reload', function (data) {
  if(data.path.indexOf(location.pathname) !== -1 || data.path == '/') location.reload();
});