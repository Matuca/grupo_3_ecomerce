module.exports = (sequelize, dataTypes) => {
    let alias='Categorias';
    let cols={
        idcategoria:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion:{ type: dataTypes.STRING }       
    };
    let config={
        tableName:'categorias',
        timestamps:false
    }

    const Categoria=sequelize.define(alias,cols,config);

    return Categoria;
}