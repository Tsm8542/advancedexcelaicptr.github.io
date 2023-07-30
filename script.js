function x(){
    var x = document.querySelector("#topic").value;
    var t = document.querySelector("#frame")
    switch(x){
        case 'boe':
            t.src = 'Files/boe.html';
            break;
        case 'cso':
            t.src = 'Files/cso.html';
            break;
        case 'ps':
            t.src = 'Files/ps.html';
            break;
        case 'aactac':
            t.src = 'Files/aactac.html';
            break;
        case 'coicwd':
            t.src = 'Files/coicwd.html';
            break;
        case 'cufie':
            t.src = 'Files/cufie.html';
            break;
        case 'tdatfie':
            t.src = 'Files/tdatfie.html';
            break;
        case 'ff':
            t.src = 'Files/ff.html';
            break;
        case 'tifie':
            t.src = 'Files/tifie.html';
            break;
        case 'dtie':
            t.src = 'Files/dtie.html';
            break;
        case 'sie':
            t.src = 'Files/sie.html';
            break;
        case 'gsie':
            t.src = 'Files/gsie.html';
            break;
        case 'acr':
            t.src = 'Files/acr.html'
            break;
        case 'nrie':
            t.src = 'Files/nrie.html'
            break;
        case 'ptie':
            t.src = 'Files/ptie.html'
            break;
        case 'tlf':
            t.src = 'Files/tlf.html'
            break;
        case 'cawt':
            t.src = 'Files/cawt.html'
            break;
        case 'dfie':
            t.src = 'Files/dfie.html'
            break;
        case 'dlie':
            t.src = 'Files/dlie.html'
            break;
        case 'aaemtaes':
            t.src = 'Files/aaemtaes.html'
            break;
        case 'wi':
            t.src = 'Files/wi.html'
            break;
        case 'ihie':
            t.src = 'Files/ihie.html'
            break;
        case 'olae':
            t.src = 'Files/olae.html'
            break;
        case 'rfadoow':
            t.src = 'Files/rfadoow.html'
            break;
        case 'idoiyes':
            t.src = 'Files/idoiyes.html'
            break;
        case 'aop':
            t.src = 'Files/aop.html'
            break;
        default:
            t.src = 'main.html';
            break;
    }
}