import * as saveAs from "file-saver";
export default class Utils {

    static abrirPDF(url:string) {
  window.open(url, '_blank');
}
}