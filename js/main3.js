document.querySelector('button').addEventListener('click', getSong)
document.querySelector('#reset').addEventListener('click', resetPage)

function getSong(){
  const bpm = document.querySelector('input').value

    if(bpm < 40 || bpm > 220) {
    alert('Please choose a tempo between 40 and 220 beats per minute')
    return;
  }

  fetch(`https://api.getsongbpm.com/tempo/?api_key=${API_KEY}&bpm=${bpm}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        let tableRef = document.getElementById('songs-table')

        // Clear table of previous data pulls
          // FYI-works without the i++ -- bc you're deleting a row, each row gets moved up to index row. If you DID increment, then you'd skip rows. Could also do a while loop.
          for(let i=1; i< tableRef.rows.length;){
            tableRef.deleteRow(i);
        }

        data.tempo.forEach( (element, index) => {
            // console.log(data.tempo[index])

            if(!(data.tempo[index].song_title == null)){
                // Add songs from data pull
                let newRow = tableRef.insertRow(-1) // Add to add of table
                let newTitleCell = newRow.insertCell(0)
                let newArtistCell = newRow.insertCell(1) // Add new cell at index zero   
                let newArtistText = document.createTextNode(data.tempo[index].artist.name)
                let newYearCell = newRow.insertCell(2)
                let newYearText = document.createTextNode(data.tempo[index].album.year)
                let newAlbumCell = newRow.insertCell(3)
                let newAlbumText = document.createTextNode(data.tempo[index].album.title)
                let newGenresCell = newRow.insertCell(4)
                let newGenresText = document.createTextNode(data.tempo[index].artist.genres)


                let songTitle = data.tempo[index].song_title

                if(songTitle == null){ //null is checking for anything that is falsey, including 'undefined'
                    songTitle = 'unknown'
                }

                let newTitleText = document.createTextNode(songTitle)
                
                newTitleCell.appendChild(newTitleText)
                newArtistCell.appendChild(newArtistText)
                newYearCell.appendChild(newYearText)
                newAlbumCell.appendChild(newAlbumText)
                newGenresCell.appendChild(newGenresText)

            }
        });

        })

        .catch(err => {
            console.log(`error ${err}`)
        });
}

function resetPage() {
  document.querySelector('input').value = ''
//   let list = document.querySelector('ul')
//   while(list.firstChild) {
//     list.removeChild(list.firstChild)
//   }
}
