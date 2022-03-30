module.exports = (sequelize, DataTypes) => {
    const submission = sequelize.define("submission", {
        palceholder: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return submission;
}