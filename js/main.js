async function loadProducts() {
  const grids = {
    games: document.querySelector('.category-block.games'),
    tools: document.querySelector('.category-block.tools'),
  };

  try {
    const res = await fetch('data/products.json');
    if (!res.ok) throw new Error(`Could not load products.json (${res.status})`);
    const data = await res.json();

    renderCategory(grids.games, data.games || [], 'title');
    renderCategory(grids.tools, data.tools || [], 'app');
  } catch (err) {
    // Leave the empty-state markup in place and let the team know why.
    console.error('Glucose Studios: failed to load product data.', err);
  }
}

function renderCategory(block, items, noun) {
  if (!block) return;

  const grid = block.querySelector('.tile-grid');
  const count = block.querySelector('.count');

  count.textContent = `${items.length} ${noun}${items.length === 1 ? '' : 's'}`;
  grid.innerHTML = items.length
    ? items.map(buildTile).join('')
    : '<p class="tile-empty">Nothing here yet.</p>';
}

function buildTile(product) {
  const download = product.downloadLink
    ? `<a class="tile-download" href="${product.downloadLink}">Download</a>`
    : `<span class="tile-download tile-download-soon">Coming soon</span>`;

  return `
    <div class="tile">
      <div class="tile-top">
        <span class="tile-code">${product.code}</span>
        <svg class="tile-glyph" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${product.icon}</svg>
      </div>
      <h4>${product.name}</h4>
      <p>${product.description}</p>
      <div class="tile-foot">
        <span class="tile-tag">${product.platforms}</span>
        ${download}
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', loadProducts);
