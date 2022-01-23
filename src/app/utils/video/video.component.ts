import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'hello',
    template: ``,
    styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
    @Input() name: string;
}


@Component({
    template: '<youtube-player videoId="YMjgA_EslBY" ></youtube-player>',
    selector: 'youtube-player-example',
})
export class YoutubePlayerExample implements OnInit {
    ngOnInit() {
        // This code loads the IFrame Player API code asynchronously, according to the instructions at
        // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
}
