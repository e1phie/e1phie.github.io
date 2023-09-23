const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    lrcType: 0,
    audio: [
        {
            name: 'Staying Alive',
            artist: 'Bee Gees',
            url: 'http://music.163.com/song/media/outer/url?id=3952752.mp3',
            cover: 'http://p2.music.126.net/yt-7hJNWz8TfawErdUU0bw==/109951166886995934.jpg?param=130y130'
        },
        {
            name: 'Every Breath You Take',
            artist: 'The Police',
            url: 'http://music.163.com/song/media/outer/url?id=19553535.mp3',
            cover: 'http://p2.music.126.net/JP66jHWATvKHkLR7rPQ9cA==/109951165814075279.jpg?param=130y130'
        }
    ]
});