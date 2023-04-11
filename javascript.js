class AppSidebarbutton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode:"open"})
    }

    connectedCallback() {
        const templateElem = document.getElementById("SidebarbuttonTemplate");
        this.shadowRoot.append(templateElem.content.cloneNode(true));
        const text = this.getAttribute("text");
        const number = this.getAttribute("unreadCount")
        this.shadowRoot.querySelector(".text").innerText = text;
        this.shadowRoot.querySelector(".number").innerText = number;
        
        
        const fixed = this.getAttribute("fixed");
        if (fixed==="true") {
            this.shadowRoot.querySelector(".options-body").style.backgroundColor = `#C2E6FF`;
        }
        
        if (Number(number)>0) {
            this.setAttribute("boldText", "true");
            console.log(this)
        }
        
        const bold = this.getAttribute("boldText");
        if (bold==="true") this.shadowRoot.querySelector(".text").style.fontWeight = `bold`;
    }
}

window.customElements.define("app-sidebar-button", AppSidebarbutton);