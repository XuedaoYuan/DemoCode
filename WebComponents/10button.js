const temp = document.createElement('template');
temp.setAttribute('id', 'button_temp');
temp.innerHTML = `<button>
    <slot></slot>
</button>`;
document.body.appendChild(temp);
