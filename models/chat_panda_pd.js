module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // Model attributes are defined here
    name: { type: DataTypes.STRING(512), allowNull: true },
    company: { type: DataTypes.STRING(512), allowNull: true },
    email: { type: DataTypes.STRING(512), allowNull: true },
    email_2: { type: DataTypes.STRING(512), allowNull: true },
    phone: { type: DataTypes.STRING(512), allowNull: true },
    employees_count: { type: DataTypes.STRING(512), allowNull: true },
    industry: { type: DataTypes.STRING(512), allowNull: true },
    person_linkedin_url: { type: DataTypes.STRING(512), allowNull: true },
    website: { type: DataTypes.STRING(512), allowNull: true },
    company_linkedin_url: { type: DataTypes.STRING(512), allowNull: true },
    designation: { type: DataTypes.STRING(512), allowNull: true },
    state: { type: DataTypes.STRING(512), allowNull: true },
    annual_revenue: { type: DataTypes.STRING(512), allowNull: true },
    tag_name: { type: DataTypes.STRING(512), allowNull: true },
    mail_status: { type: DataTypes.BOOLEAN, allowNull: true },
    email_updated_time: { type: DataTypes.DATE, allowNull: true },
  }, {
    tableName: 'chat_panda_pd',
    timestamps: false
  });
  return User;
}