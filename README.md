# SongBeats

An app to help you find songs at your ideal tempo - 
SongBeats can aid your music selection for running, aerobics, work soundtracks, marching band, choirs and any usage you can imagine! 

<p align="center">
  <a href="https://songbeats.netlify.app/" target="_blank">
    <img src="https://user-images.githubusercontent.com/52755177/180622264-8a125f3c-29fe-46a7-8696-4ffd6c0f8ee8.gif" alt="SongBeats"/>
  </a>
</p>

<p align="center">
  <a href="https://github.com/katiehom/song-beats" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=REPO&color=1f1591&style=plastic&logo=github&logo-color=white"/>
  </a>  
  <a href="https://songbeats.netlify.app/" target="_blank">
    <img src="https://img.shields.io/static/v1?label=|&message=WEBSITE&color=c90c64&style=plastic&logo=netlify&logo-color=white"/>
  </a>
</p>


## How It's Made:

**Tech used:** <strong>HTML, CSS, JavaScript, API</strong>

SongBeats integrates the GetSongBPM API for quick compilation of the top 100 searched songs at your entered beats per minute (BPM) or tempo. The user enters a tempo (between 40 and 220 BPM) into the input and clicks search which makes a request to the API for the top 100 songs meeting that criteria including song data such as Title, Artist, Year, Album and Genre which are added to the DOM using JavaScript.

## Optimizations
Future iterations might include sorting by category, searching by song title, finding optimized song suggestions at the same tempo of a specific song, and searching within a specific genre, year, etc.

In the beginning, I was retrieving only song titles and artists and decided to add in the other categories of data for better identification. Also, the first iteration included adding new information as list items and later as more information was added to change the JavaScript to create new elements in a table and add them to the site.

## Lessons Learned:

I learned about accessing JSON from an API properly and different ways to append rows and columns of data using JavaScript. 

## Other Projects:

<table bordercolor="#66b2b2">
  
  <tr>
       <td width="33.3%" valign="top">
<a target="_blank" href="https://github.com/katiehom/katie-hom">Portfolio</a>
        <br />
        <a target="_blank" href="https://github.com/katiehom/katie-hom">
          <img src="https://user-images.githubusercontent.com/52755177/180623739-fbf4f9ef-d1e2-4cb3-8717-0f139b4af221.gif" width="100%" alt="Portfolio"/>
        </a>
    </td>
        <td width="33.3%"  style="align:center;" valign="top">
<a target="_blank" href="https://theoryrevolution.com">Theory Revolution</a>
        <br />
      <a target="_blank" href="https://theoryrevolution.com">
            <img src="https://user-images.githubusercontent.com/52755177/180623890-6179f79a-82f7-4336-bf2f-adaedaa1eb44.gif" width="100%" alt="Theory Revolution"/>
      </a>
    </td>
    <td width="33.3%" valign="top">
<a target="_blank" href="https://github.com/katiehom/ben-folds-api">Ben Folds Songs</a>
      <br />
        <a target="_blank" href="https://github.com/katiehom/ben-folds-api">
          <img src="https://user-images.githubusercontent.com/52755177/186995784-efe50111-b278-425a-ba54-aac9779028d7.gif" width="100%" alt="Ben Folds Songs"/>
        </a>
    </td>
  </tr>
</table>
