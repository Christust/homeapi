export function separator() {
    console.log("\n----------------------------------------------------------------------------------------------------\n");
}
export function log(message: string) {
    separator();
    console.log(`[LOG] ${message}`);
}
export function error(message: string) {
    separator();
    console.error(`[ERROR] ${message}`);
}