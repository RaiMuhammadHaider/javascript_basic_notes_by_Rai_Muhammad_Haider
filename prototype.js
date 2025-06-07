let classs = {
    school: 'oeyr',
    section: 'B',
};

let zzz = {
    nnnn: 'NAkhoi',
    jjjjj: 80,
    Funk(parans) {
        console.log(`this is funk ${parans}`);
    },
    __proto__: classs,  // setting prototype to classs object
};

let a = {
    b: 'NAkhoi',
    j: 80,
    thisISFunk(parans) {
        console.log(`this is funk ${parans}`);
    },
    __proto__: zzz, // setting prototype to zzz object
};

// Testing the methods
console.log(a.b);
; // Should work, calls the method from 'a'
zzz.Funk('this is funk');       // Should work, calls the method from 'zzz'
console.log(a.school);          // Should print 'oeyr', inherited from classs
console.log(a.section);         // Should print 'B', inherited from classs
