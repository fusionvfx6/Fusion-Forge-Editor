const fs = require('fs');
const path = require('path');

const dirs = ['src', 'void_icons', 'package.json', 'product.json', 'README.md'];
const exts = ['.ts', '.tsx', '.css', '.json', '.html', '.md', '.js'];

function processPath(p) {
    if (fs.statSync(p).isDirectory()) {
        if (p.includes('node_modules') || p.includes('.git') || p.includes('out') || p.includes('.build')) return;
        fs.readdirSync(p).forEach(f => processPath(path.join(p, f)));
    } else {
        if (!exts.some(ext => p.endsWith(ext))) return;
        
        let content = fs.readFileSync(p, 'utf8');
        let newContent = content
            .replace(/contrib\/void/g, 'contrib/fusionforge')
            .replace(/Void/g, 'FusionForge')
            .replace(/void\./g, 'fusionforge.')
            .replace(/void-/g, 'fusionforge-')
            .replace(/'void'/g, "'fusionforge'")
            .replace(/"void"/g, '"fusionforge"')
            .replace(/void_/g, 'fusionforge_')
            // Special cases
            .replace(/VoidEditor/g, 'FusionForgeEditor')
            .replace(/void editor/gi, 'Fusion Forge Editor')
            .replace(/FusionForge settings/g, 'Fusion Forge settings'); // Fix double capitalization
            
        if (content !== newContent) {
            fs.writeFileSync(p, newContent, 'utf8');
            console.log(`Updated ${p}`);
        }
    }
}

dirs.forEach(d => {
    if (fs.existsSync(d)) {
        processPath(path.resolve(__dirname, d));
    }
});
