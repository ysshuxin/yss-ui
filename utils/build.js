const path = require("path");
const fs = require("fs");
const componentsPath = path.resolve(path.join(__dirname, "../src/components"));

const getEntry = async function(fileTypeReg = /(js|vue|jsx|tsx)$/) {
  let fileObj = {};
  let itemArr = [];
  const componentsDir = await fs.promises.opendir(componentsPath).catch(err => {
    console.log("errPath1", componentsPath);
  });
  for await (const item of componentsDir) {
    if (item.isDirectory()) {
      const itemName = item.name;
      const itemPath = path.resolve(componentsPath, "./" + itemName);
      console.log(itemPath)
      const itemDir = await fs.promises.opendir(itemPath).catch(err => {
        console.log("errPath2", item);
      });
      for await (const componentItem of itemDir) {
        if (componentItem.isFile()) {
          const componentName = componentItem.name;
          let fileType = componentName.split(".");
          if (fileTypeReg.test(fileType[1])) {
            itemArr.push({
              path: path.resolve(itemPath, "./" + componentName),
              dirName: itemName + "_" + fileType[0],
              libDir: itemName,
              fileName:itemName+'/'+(fileType[0] + ".js"),
              cssFilename: path.join(fileType[0] + ".css"),
              mdFilename: path.join(fileType[0] + ".md"),
              jsFileName: path.join(itemName + "/" + (fileType[0] + ".js"))
            });
          }
        }
      }
    }
  }
  if (itemArr.length > 0) {
    itemArr.map(item => {
      fileObj[item.dirName] = {
        import: item.path,
        filename: item.fileName
      };
    });
  }
  return { fileObj, itemArr };
};


module.exports = {
  getEntry
};
