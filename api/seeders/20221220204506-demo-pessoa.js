module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Pessoas', [
			{
				nome:'Gabriel Barros',
				ativo: true,
				email: 'gabriel@gabriel.com',
				role: 'estudante',
				createdAt: '2022-12-20 20:50:35',
				updatedAt: '2022-12-20 20:50:35'
			},
			{
				nome: 'Ana Souza',
				ativo: true,
				email: 'ana@ana.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Marcos Cintra',
				ativo: true,
				email: 'marcos@marcos.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Felipe Cardoso',
				ativo: true,
				email: 'felipe@felipe.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sandra Gomes',
				ativo: false,
				email: 'sandra@sandra.com',
				role: 'estudante',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Paula Morais',
				ativo: true,
				email: 'paula@paula.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Sergio Lopes',
				ativo: true,
				email: 'sergio@sergio.com',
				role: 'docente',
				createdAt: new Date(),
				updatedAt: new Date()
			}
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Pessoas', null, {})
  }
}
