module.exports = (models) => {
   let entries = Object.entries(models);
   let capsEntries = entries.map((entry) => [
      entry[0][0].toUpperCase() + entry[0].slice(1),
      entry[1],
   ]);
   return Object.fromEntries(capsEntries);
};
