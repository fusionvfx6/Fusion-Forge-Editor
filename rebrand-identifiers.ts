import { Project } from "ts-morph";

async function main() {
    const project = new Project({
        tsConfigFilePath: "src/tsconfig.json",
    });

    const renames: Record<string, string> = {
        "VoidCheckUpdateRespose": "FusionForgeCheckUpdateResponse",
        "VoidCommandBarProps": "FusionForgeCommandBarProps",
        "VoidCommandBarService": "FusionForgeCommandBarService",
        "VoidDirectoryItem": "FusionForgeDirectoryItem",
        "VoidFileSnapshot": "FusionForgeFileSnapshot",
        "VoidModelService": "FusionForgeModelService",
        "VoidModelType": "FusionForgeModelType",
        "VoidSCM": "FusionForgeSCM",
        "VoidSelectionHelperProps": "FusionForgeSelectionHelperProps",
        "VoidSettingsInput": "FusionForgeSettingsInput",
        "VoidSettingsPane": "FusionForgeSettingsPane",
        "VoidSettingsService": "FusionForgeSettingsService",
        "VoidSettingsState": "FusionForgeSettingsState",
        "VoidStatefulModelInfo": "FusionForgeStatefulModelInfo",
        "VoidStaticModelInfo": "FusionForgeStaticModelInfo",
        "VoidStaticProviderInfo": "FusionForgeStaticProviderInfo",
        "VoidUpdateWorkbenchContribution": "FusionForgeUpdateWorkbenchContribution"
    };

    console.log("Loading source files...");
    const files = project.getSourceFiles("src/vs/workbench/contrib/void/**/*.ts");
    
    let renamedCount = 0;

    for (const sourceFile of files) {
        for (const [oldName, newName] of Object.entries(renames)) {
            const decl = sourceFile.getClass(oldName) || 
                         sourceFile.getInterface(oldName) || 
                         sourceFile.getTypeAlias(oldName) || 
                         sourceFile.getEnum(oldName) || 
                         sourceFile.getFunction(oldName) ||
                         sourceFile.getVariableDeclaration(oldName);
            if (decl) {
                console.log(`Renaming ${oldName} -> ${newName} in ${sourceFile.getBaseName()}`);
                decl.rename(newName);
                renamedCount++;
            }
        }
    }

    console.log(`Renamed ${renamedCount} declarations. Saving files...`);
    await project.save();
    console.log("Done.");
}

main().catch(console.error);
