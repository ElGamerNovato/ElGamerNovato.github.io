# ElGamerNovato.github.io
# He practicado propiedades de css y javascript guiándome de este video: https://www.youtube.com/watch?v=1wfeqDyMUx4&list=WL&index=48&t=52s
# A parte de esto, le he agregado detalles, como Responsive Web Design, y arreglado un bug que tenía en particular.
# El bug consistía en que, cuando bajas en la página, los objetos seguían bajando, lo que hacía que el documento sea infinito.
# Para solucionar esto, apliqué la propiedad en javascript "this.window.innerHeight", para así compararlo con window.scrollY, de tal manera que 
# se muevan los elementos siempre y cuando window.scrollY sea menor o igual a this.window.innerHeight
# A pesar de esto, en ciertas resoluciones se presentaba un espacio sin rellenar, el cual tenía un color morado claro.
# Para arreglar esto, en la parte Responsive configuré que window.scrollY sea menor o igual a this.window.innerHeight-200.
