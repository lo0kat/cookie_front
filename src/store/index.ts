import { createStore } from 'vuex'

const store = createStore({
  state: {
     cookies: [
        {
           "_id":0,
           "name":"Cookie aux Pépites de Chocolat",
           "picUrl":require('@/assets/images/cookieChoco.jpg'),
           "price":2,
           "ingredients":
               {"Oeuf":"1",
               "Beurre doux":"85g",
               "Farine":"150g",
               "Sucre":"85g",
               "Pépites de chocolat":"100g",
               "Sucre vanille":"1 sachet",
               "Sel":"1/2 c à c",
               "Levure chimique":"1 c à c"} ,
           "steps":["Laissez ramollir le beurre à température ambiante. Dans un saladier, malaxez-le avec le sucre.",
                   "Ajoutez l'oeuf et éventuellement le sucre vanillé.",
                   "Versez progressivement la farine, la levure chimique, le sel et les pépites de chocolat. Mélangez bien.",
                   "Beurrez une plaque allant au four ou recouvrez-la d'une plaque de silicone. À l'aide de deux cuillères à soupe ou simplement avec les mains, formez des noix de pâte en les espaçant car elles s'étaleront à la cuisson.",
                   "Faites cuire 8 à 10 minutes à 180°C soit thermostat 6. Il faut les sortir dès que les contours commencent à brunir."
                   ]
           }
           ,
       
           {
               "_id":1,
               "name":"Cookie tout Chocolat",
               "picUrl":require('@/assets/images/cookieChoco.jpg'),
               "price":3,
               "ingredients":
                   {"Oeuf":"1",
                   "Chocolat Noir":"200g",
                   "Beurre pommade":"55g",
                   "Farine":"100g",
                   "Pépites de chocolat":"200g",
                   "Sucre brun":"120g",
                   "Levure":"1 c à c",
                   "Vanille":"1/4 c à c"} ,
               "steps":["Préchauffer le four à 160° C. Faire fondre le chocolat noir au micro-ondes ou au bain-marie, ajouter le beurre et bien mélanger. Ajouter ensuite le sucre, puis les œufs et la vanille.",
                       "Bien mélanger pour obtenir une pâte lisse.",
                       "Dans un petit saladier, mélanger la farine et la levure, puis ajouter au 1er mélange, en mélangeant doucement et soigneusement. Enfin ajouter les pépites de chocolat.",
                       "Mettre la pâte 5 minutes ou plus au réfrigérateur pour qu’elle raffermisse.",
                       "Sur une plaque à pâtisserie, faire des tas avec la pâte, de la valeur d’une cuiller à soupe, on obtient de 18 à 20 cookies.",
                       "Faire cuire de 12 à 14mn. Laisser 5mn sur la plaque, puis faire complètement refroidir sur une grille."
                       
                   ]
               },
       
               {
                   "_id":2,
                   "name":"Cookie aux éclats de Caramel",
                   "picUrl":require('@/assets/images/cookieChoco.jpg'),
                   "price":2,
                   "ingredients":
                       {"Oeuf":"1",
                       "Chocolat Noir":"200g",
                       "Beurre de cacahuètes":"40g",
                       "Sucre blond de canne" :"100g",
                       "Beurre doux":"65g",
                       "Farine":"200g",
                       "Bicarbonate de Sodium":"5g",
                       "Pépites de chocolat":"90g",
                       "Sucre en Poudre":"75g",
                       "Caramel Beurre Salé":"100g",
                       "Cacahuètes grillées non salées":"60g"} ,
                   "steps":["Dans le bol du robot, mettre le beurre mou en morceaux, le beurre de cacahuètes, les sucres et le sel. En vitesse lente, mélanger au robot pâtissier muni de la feuille (fouet plat).",
                           "Quand le mélange est lisse et homogène, ajouter l'oeuf et laisser mélanger. A part, dans un saladier, peser la farine avec le bicarbonate de sodium et les pépites de chocolat. Puis ajouter dans le robot et laisser mélanger mais pas longtemps ! Même pas 1 minute (jusqu'à ce que les pépites de chocolat soient réparties dans la pâte).",
                           "Diviser la pâte en boules de 50g et les déposer sur une plaque perforée tapissée de papier sulfurisé (les espacer).",
                           "Placer 1 heure au réfrigérateur. Pendant ce temps préparer les cacahuètes caramélisées.",
                           "Dans une casserole moyenne en inox, mettre le sucre et faire comme un caramel à sec : faire fondre sans remuer. Quand le sucre est presque totalement fondu et qu'il commence à colorer verser les cacahuètes et remuer jusqu'à ce que les cacahuètes soient caramélisées et dorées (attention à ne pas les brûler ! Retirer à temps du feu !).",
                           "Verser immédiatement les cacahuètes caramélisées sur une silpat et laisser bien refroidir (environ 30 min).",
                           "Puis les hacher au couteau pour les concasser grossièrement.",
                           "Penser à préchauffer le four à 170°c, chaleur tournante le temps que les cookies sont au froid.",
                           "Après 1h au réfrigérateur, les sortir, les aplatir légèrement avec la paume de la main (ils doivent faire 6 cm de diamètre).",
                           "Déposer des cacahuètes caramélisées à la surface et appuyer pour les faire tenir.",
                           "Enfourner 10 minutes. Il faut que les cookies se soient un peu étalés mais doivent rester moelleux et épais (ils peuvent paraître pas assez cuits mais le tour durcira en refroidissant et le coeur restera moelleux).",
                           "A la fin de cuisson, verser à l'aide d'une petite cuillère un peu de caramel sur tous les cookies.",
                           "Une fois que tous les cookies sont nappés de caramel, laisser figer 20 minutes puis décoller les cookies délicatement à l'aide d'une petite spatule et les déposer sur une grille. Laisser totalement refroidir ainsi."
                           
                       ]
                   }
       
      ]
     ,
     StoreCart : Array<any>()
     }
     
     ,

     getters : {
        cookies : (state) => state.cookies,
        StoreCart: (state) => state.StoreCart 
     }
     ,

     mutations: {
        ADD_Item(state, id) {
          state.StoreCart.push(id);
        },
    
        REMOVE_Item(state, index) {
          state.StoreCart.splice(index, 1);
        },
      },
      actions: {
        addItem(context, id) {
          context.commit("ADD_Item", id);
        },
    
        removeItem(context, index) {
          context.commit("REMOVE_Item", index);
        },
      },
      modules: {},


})

export default store;
