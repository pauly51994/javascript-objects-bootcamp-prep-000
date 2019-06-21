let playlist = {
  LilWayne : 'A Milli',
  BiggieSmalls : 'Juicy',
  KendrickLamar : 'Humble'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName;
  return playlist;
}
