module.exports = async (jsonInfo, model, relationModel) => {
   try {
      const allMovies = await relationModel.findAll();
      jsonInfo.data.forEach(async (element, index) => {
         const [instance] = await model.findOrCreate({
            where: element,
         });

         for (let i = 0; i < index; i++) {
            await allMovies[i].addGenre(instance);
         }
      });
   } catch (err) {
      console.log(err.message);
   }
};
