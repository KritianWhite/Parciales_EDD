var a, dia, k;
a = [82, 60, 61, 200, 25, 24, 63];
dia = "s";
k = 7156;

while (k > 0) {
  if (a[0] !== 0) {
    k -= a[0];
    dia = "lunes";
    console.log(k);
  } else {
    if (a[1] !== 0) {
      k -= a[1];
      dia = "marates";
      console.log(k);
    } else {
      if (a[2] !== 0) {
        k -= a[2];
        dia = "Miercoles";
        console.log(k);
      } else {
        if (a[3] !== 0) {
          k -= a[3];
          dia = "jueves";
          console.log(k);
        } else {
          if (a[4] !== 0) {
            k -= a[4];
            dia = "viernes";
            console.log(k);
          } else {
            if (a[5] !== 0) {
              k -= a[5];
              dia = "sabado";
              console.log(k);
            } else {
              if (a[6] !== 0) {
                k -= a[6];
                dia = "domingo";
                console.log(k);
              }
            }
          }
        }
      }
    }
  }
}

console.log(dia);
