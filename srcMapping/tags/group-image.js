/* global hexo */

'use strict';

const groupImage = (args, content) => {
  const imgsSameSize = args[0] === 'same'

  content = hexo.render.renderSync({ text: content, engine: 'markdown' });

  let images = content.match(/<img[\s\S]*?>/g);

  if (imgsSameSize) {
    images = images.map(item => {
      return `<div class="col">${item}</div>`
    });
  } else {
    images = images.map(item => {
      return `<div class="col"><div class="image-adapter"><div>${item}</div></div></div>`
    });
  }

  const rowCol = Math.min(3, images.length)

  return `<div class="container group-image-container"><div class="row row-cols-${rowCol} gx-2 gy-2">${images.join('')}</div></div>`
};

/*
  {% groupimage total n1-n2-n3-... %}
  ![](url)
  ![](url)
  ![](url)
  {% endgroupimage %}
 */
// hexo.extend.tag.register('groupimage', groupImage, { ends: true });
hexo.extend.tag.register('gi', groupImage, { ends: true });
