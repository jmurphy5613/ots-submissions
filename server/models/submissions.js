module.exports = (sequelize, DataTypes) => {
    const submission = sequelize.define("submission", {
        submitterName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filmTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filmGenre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        releaseYear: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filmRuntime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filmLink: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filmTrailerLink: {
            type: DataTypes.STRING,
        },
        filmImages: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filmDescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING,
        },
        credits: {
            type: DataTypes.STRING,
            allowNull: false
        },
        behindTheScenesLink: {
            type: DataTypes.STRING,
        },
        websiteLink: {
            type: DataTypes.STRING,
        },
        youtubeLink: {
            type: DataTypes.STRING,
        },
        instagramLink: {
            type: DataTypes.STRING,
        },
        twitterLink: {
            type: DataTypes.STRING,
        },
        tiktokLink: {
            type: DataTypes.STRING,
        }

    });

    return submission;
}