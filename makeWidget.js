// By default, the webring fetches from this LINK, but you can fetch a local .json if wanted :)
const DATA = `https://raw.githubusercontent.com/toeeeee/uci-webring/main/webring.json`;

// Widget stuff
const template = document.createElement("template");
template.innerHTML = `
<style>
.webring {
    display: grid;
    text-align: center;
    font: 100% system-ui, sans-serif;
    border: 1px solid;
    padding: 1rem;
}
</style>

<div class="webring">
    <div id="copy"> 
    </div
</div>
`;

// Widget initialization 
class WebRing extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        var thisSite = this.getAttribute("site");
        console.log(thisSite);

        fetch(DATA)
            .then((response) => {
                if (!response.ok) { throw new Error("not working, see:" + response.status); }
                return response.json();
            })
            .then((sites) => {
                // Current site find in JSON
                const matchedSiteI = sites.findIndex(
                    (site) => {
                        const re = /^https:\/\/www.|\/$/g;
                        console.log(site.url.replace(re, ''));
                        return (site.url.replace(re,'') === thisSite);
                    }
                );

                const matchedSite = sites[matchedSiteI];

                let prevSiteI = matchedSiteI - 1; 
                if (prevSiteI === -1) prevSiteI = sites.length - 1; // Wrap around

                let nextSiteI = matchedSiteI+1;
                if (nextSiteI >= sites.length) nextSiteI = 0;

                const randomSiteI = this.getRandomInt(0, sites.length-1);
                while (randomSiteI === matchedSiteI) { randomSiteI = this.getRandomInt(0, sites.length-1); }

                const prevSite = sites[prevSiteI];
                const nextSite = sites[nextSiteI];
                const randomSite = sites[randomSiteI];

                /*console.log(matchedSiteI);
                console.log(prevSiteI);
                console.log(nextSiteI);
                console.log(randomSiteI);
                console.log(sites)
                console.log(matchedSite); print block because im going insane lol*/

                // MODIFY HTML HERE TO ADD IMAGES, ETC
                const cp = `
                <h1> Zot zot zot! </h1>
                <p> 
                    <a href="${matchedSite.url}">${matchedSite.name}</a> is part of a webring made up of UCI students and alum. 
                </p>
            
                <p>
                    <a href="${sites[prevSiteI].url}">[Prev]</a>
                    <a href="${sites[nextSiteI].url}">[Next]</a>
                    <a href="${sites[randomSiteI].url}">[I'm feeling lucky]</a>
                </p>

                <p> Class of ${matchedSite.year}!</p>
                `;

                this.shadowRoot
                    .querySelector("#copy")
                    .insertAdjacentHTML("afterbegin", cp)
            });
        }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max-min+1)) + min;
    }
}

window.customElements.define('webring-uci', WebRing);