/**
 * @jest-environment jsdom
 */

// 1. Simula o HTML básico que o script.js usa, incluindo os links de contato
document.body.innerHTML = `
  <section>
    <h2>Hobbies & Interesses</h2>
    <ul class="interesses">
      <li>💻 Programação e Autumações de processos</li>
      <li>📚 Ler livros de fantasia e distopia</li>
      <li>🎮 Jogar videogame</li>
      <li>📽️ Assistir Filmes e Series</li>
      <li>📸 Tirar fotos de ambientes e paisagens</li>
    </ul>
  </section>

  <section>
    <h2>Minhas Redes de Contatos</h2>
    <ul class="redes">
      <li><a href="https://github.com/annyfiorese" target="_blank">GitHub</a></li>
      <li><a href="https://linkedin.com/in/anny-fiorese-016155249" target="_blank">Linkedin</a></li>
      <li><a href="https://www.instagram.com/annyfiorese" target="_blank">Instagram</a></li>
      <li><a href="mailto:annyfiorese24@gmail.com">E-mail</a></li>
    </ul>
  </section>
`;

require('@testing-library/jest-dom');
const { fireEvent, waitFor } = require('@testing-library/dom');

// 2. Carrega seu script.js
require('../sobre-mim/script.js');

// 3. Começa a definir os testes
describe('Testes de interação com hobbies', () => {

  test('O título "Hobbies & Interesses" deve existir', () => {
    const titulo = document.querySelector('h2');
    expect(titulo).toBeInTheDocument();
    expect(titulo).toHaveTextContent('Hobbies & Interesses');
  });

  test('A lista de hobbies deve ser visível inicialmente', () => {
    const lista = document.querySelector('ul.interesses');
    expect(lista).toBeVisible();
    expect(lista).not.toHaveClass('hidden');
  });


  test('Ao clicar novamente no título, a lista deve reaparecer (display: block)', async () => {
    const titulo = document.querySelector('h2');
    const lista = document.querySelector('ul.interesses');

    // Primeiro clique: esconde
    fireEvent.click(titulo);

    // Segundo clique: mostra
    fireEvent.click(titulo);

    // Espera até que a classe 'hidden' seja removida
    await waitFor(() => {
      expect(lista).not.toHaveClass('hidden');
    });
  });

  test('A lista deve ter exatamente 5 hobbies listados', () => {
    const hobbies = document.querySelectorAll('ul.interesses li');
    expect(hobbies.length).toBe(5);
    expect(hobbies[0]).toHaveTextContent('💻 Programação e Autumações de processos');
    expect(hobbies[1]).toHaveTextContent('📚 Ler livros de fantasia e distopia');
    expect(hobbies[2]).toHaveTextContent('🎮 Jogar videogame');
    expect(hobbies[3]).toHaveTextContent('📽️ Assistir Filmes e Series');
    expect(hobbies[4]).toHaveTextContent('📸 Tirar fotos de ambientes e paisagens');
  });

  // Teste para verificar se os links de contato estão presentes
  test('Os links de contato devem estar presentes e com os URLs corretos', () => {
    const links = document.querySelectorAll('ul.redes a');
    expect(links.length).toBe(4); // Verifica se há 4 links de redes sociais

    expect(links[0]).toHaveAttribute('href', 'https://github.com/annyfiorese');
    expect(links[1]).toHaveAttribute('href', 'https://linkedin.com/in/anny-fiorese-016155249');
    expect(links[2]).toHaveAttribute('href', 'https://www.instagram.com/annyfiorese');
    expect(links[3]).toHaveAttribute('href', 'mailto:annyfiorese24@gmail.com');
  });

});
