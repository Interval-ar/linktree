function grab_links() {
  const link_obj = {
    whatsapp: {
      link: "https://api.whatsapp.com/send?phone=549111551572279&text=Hola Interval!",
      title: "WhatsApp",
      img_url: "images/whatsapp.jpg",
      qr: "images/QR/whatsapp.png",
    },
    youtube: {
      link: "https://www.youtube.com/channel/UCsyvnonMNUqXbX7TVaQPhcA",
      title: "Youtube",
      img_url: "images/youtube.jpg",
      qr: "images/QR/youtube.png",
    },
    instagram: {
      link: "https://www.instagram.com/interval.ar/",
      title: "Instagram",
      img_url: "images/Instagram.jpg",
      qr: "images/QR/interval.png",
    },
    website: {
      link: "https://interval.ar/",
      title: "Web",
      img_url: "images/interval.jpg",
      qr: "images/QR/interval.png",
    },
    vimeo: {
      link: "https://vimeo.com/intervaltl",
      title: "Vimeo",
      img_url: "images/vimeo.jpg",
      qr: "images/QR/vimeo.png",
    },
  };
  link_string = "";
  index = 0;
  const content = document.getElementById("content");
  link_containers_array = [];
  link_container = document.createElement("ul");
  for (let linkName in link_obj) {
    if (index % 2 == 0) {
      if (index > 0) {
        content.appendChild(link_container);
      }
      link_container = document.createElement("ul");
      link_container.setAttribute("class", "links-container");
    }
    let link_html_object = create_link_HTML_objects(link_obj[linkName]);
    link_container.appendChild(link_html_object);
    index++;
  }
  content.appendChild(link_container);
}

function create_link_HTML_objects(item) {
  let li = document.createElement("li");
  let a = document.createElement("a");
  let p = document.createElement("p");
  let show_more = document.createElement("img");

  show_more.innerHTML = "+";
  show_more.setAttribute("src","media/qr-code-icon.svg")
  show_more.className = "show-more";
  show_more.onclick = () => set_modal_values(item);
  p.innerHTML = item["title"];
  a.setAttribute("href", item["link"]);
  a.setAttribute("target","_blank")
  a.appendChild(p);
  li.className = "link-container";
  li.style.backgroundImage = "url(" + item["img_url"] + ")";
  li.appendChild(show_more);
  li.appendChild(a);

  return li;
}

function hide_modal() {
  modal = document.getElementById("modal");
  modal.className = "hidden";
}

function set_modal_values(item) {
  const url = document.getElementById("qr-url");
  url.setAttribute("href", item["link"]);
  console.log(item["link"]);
  url.innerHTML = item["link"]
    .replace("http://", "")
    .replace("https://", "")
    .replace("www.", "")
    .split("/")[0];

  let QRCode = item["qr"];
  document.getElementById("qr-code").setAttribute("src", QRCode);
  modal = document.getElementById("modal");
  qr_url_section = document.getElementById("qr-description");
  qr_url_section.appendChild(url);
  modal.className = "shown";
}

grab_links();
