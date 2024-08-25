function getData() {
    const data = fetch('./data.json').then(res => res.json())
    return data
  }
  
  
async function friendListsElement() {
const friendLists = document.getElementById("profile");
const data = await getData() 
const lists = `
    ${data.map(i => `

    <div class="card">
        <img src="${i.fotoselfie}" alt="${i.nama}">
        <div class="card-info">
            <p><strong>Nama :</strong> ${i.nama}</p>
            <p><strong>NIM :</strong> ${i.nim}</p>
            <p><strong>Ttl :</strong> ${i.ttl}</p>
            <p><strong>No Hp:</strong> ${i.no}</p>
            <p><strong>Alamat:</strong> ${i.alamat}</p>
            <a href="wa.me/${i.no}" target="_blank">
            <button class="card-button">View Details</button>
            </a>
        </div>
    </div>
    `).join("")}
`;

return friendLists.innerHTML = lists
}

friendListsElement()