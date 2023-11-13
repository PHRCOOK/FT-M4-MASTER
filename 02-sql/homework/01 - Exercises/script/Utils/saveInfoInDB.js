module.exports = async (jsonInfo, model) => {
   jsonInfo.data.forEach(async (element) => {
      try {
         await model.findOrCreate({
            where: element,
         });
      } catch (err) {
         console.log(err.message);
      }
   });
};
