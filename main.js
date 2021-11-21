errorBtns = document.getElementById('error-btns').querySelectorAll('button');
// console.log(errorBtns);
errorBtns[0].onclick = () => {
  console.log('console.log()');
};
errorBtns[1].onclick = () => {
  console.error('console.error()');
};
errorBtns[2].onclick = () => {
  console.count('console.count()');
  console.count('console.count()');
};
errorBtns[3].onclick = () => {
  console.warn('console.warn()');
};
errorBtns[4].onclick = () => {
  const x = 5;
  const y = 3;
  const reason = 'x is expected to be less than y';
  console.assert(x < y, {x, y, reason});
};
errorBtns[5].onclick = () => {
  console.clear();
};
errorBtns[6].onclick = () => {
  console.dir(document);
};
errorBtns[7].onclick = () => {
  console.dirxml(document);
};
errorBtns[8].onclick = () => {
  const label = 'Great classes in UCSD';
  console.group(label);
  console.info('CSE 110');
  console.info('CSE 110');
  console.info('CSE 110');
  console.info('CSE 110');
};
errorBtns[9].onclick = () => {
  const label = 'Great classes in UCSD';
  console.groupEnd(label);
};
errorBtns[10].onclick = () => {
  console.table([
    {
      first: 'René',
      last: 'Magritte',
    },
    {
      first: 'Chaim',
      last: 'Soutine',
      birthday: '18930113',
    },
    {
      first: 'Henri',
      last: 'Matisse',
    },
  ]);
};
errorBtns[11].onclick = () => {
  console.time();
  for (let i = 0; i < 100000; i++) {
    const square = i ** 2;
    if (i % 10000 == 0) console.log(square);
  }
};
errorBtns[12].onclick = () => {
  console.timeEnd();
};
errorBtns[13].onclick = () => {
  const first = () => {
    second();
  };
  const second = () => {
    third();
  };
  const third = () => {
    fourth();
  };
  const fourth = () => {
    console.trace();
  };
  first();
};
errorBtns[14].onclick = () => {
  console.log(aVariable); // Triger a Global Error
};
