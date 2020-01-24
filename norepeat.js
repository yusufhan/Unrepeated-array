function main() {
    var a = createArray(10);
    var rand, i, j, var_var;
    
    var_var = 0;
    for (i = 0; i <= 9; i++) {
        a[i] = 0;
    }
    for (i = 0; i <= 9; i++) {
        rand = Math.floor(Math.random() * 10) + 1;
        for (j = 0; j <= 9; j++) {
            if (a[j] == rand) {
                var_var = var_var + 1;
            }
        }
        if (var_var == 0) {
            a[i] = rand;
        } else {
            i = i - 1;
        }
        var_var = 0;
    }
}
