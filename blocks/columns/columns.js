import { decorateDefaultContent } from '../../scripts/functions.js';

export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  const filteredClassList = [...block.classList]
    .filter((cls) => cls !== 'columns' && cls !== 'block');
  const type = filteredClassList.length ? `-${filteredClassList[0]}` : '';

  let mjml = `<mj-section mj-class="mj-colums${type}-cols-${cols.length}">`;
  cols.forEach((div, index) => {
    let col = '';
    if (index === 0) {
      col = 'first';
    } else if (index === cols.length - 1) {
      col = 'last';
    }
    mjml += `
      <mj-column mj-class="mj-columns${type}-col mj-columns${type}-col-${index + 1} mj-columns${type}-col-${col}">
        ${decorateDefaultContent(div)}
      </mj-column>
    `;
  });
  mjml += '</mj-section>';
  return mjml;
}
