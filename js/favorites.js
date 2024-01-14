// classe com lógica de dados - estrutura
export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

load() {
    this.entries = [
        {
            login: 'diegomes000',
            name: "Diego Gomes",
            public_repos: '16',
            followers: '120'
        },
        {
            login: 'diego3g',
            name: "Diego Fernandes",
            public_repos: '16',
            followers: '120'
        },
    ]
}
}



//classe para visualização e eventos HTML
export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.update()
    }

    update() {
        this.removeAllTr()
        //
        this.entries.forEach( user => {
            const row = this.createRow()
            
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers
            
            //para manipular a DOM
            this.tbody.append(row)
        })
        
        
    }

    createRow() {
        const tr = document.createElement('tr')

        const content = `           
            <td class="user">
                <img src="https://github.com/diegomes000.png" alt="imagem de diegomes000">
                <a href="https://github.com/diegomes0000" target="_blank">
                    <p>Diego Gomes</p>
                    <span>diegomes000</span>
                </a>
            </td>
            <td class="repositories">01</td>
            <td class="followers">01</td>
            <td><button class="remove">&times;</button></td>
        `
        tr.innerHTML = content

        return tr
    }


    removeAllTr() {
        
        this.tbody.querySelectorAll('tr').forEach((tr) => {
            tr.remove()
        });
    }

}