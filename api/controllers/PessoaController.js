const database = require('../models')

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmPessoa(req, res) {
        const { id } = req.params;
        try {
            const umaPessoa = await database.Pessoas.findOne({
                where:
                {
                    id: Number(id)
                }
            });
            return res.status(200).json(umaPessoa);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criaPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params
        const novasInfos = req.body

        try {
            await database.Pessoas.update(novasInfos, { where: { id: Number(id) } })
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: { id: Number(id) }
            })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({ where: { id: Number(id) } })
            return res.status(200).json({ mensagem: `ID ${id} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where:
                {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(umaMatricula);
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        const NovaMatricula = { ...req.body, estudante_id: Number(estudanteId) };
        try {
            const NovaMatriculaCriada = await database.Matriculas.create(NovaMatricula);
            return res.status(200).json(NovaMatriculaCriada);
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body

        try {
            await database.Matriculas.update(novasInfos, { where: { id: Number(matriculaId), estudante_id: Number(estudanteId) } })
            const MatriculaAtualizada = await database.Matriculas.findOne({
                where: { id: Number(matriculaId) }
            })
            return res.status(200).json(MatriculaAtualizada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async apagaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try {
            await database.Matriculas.destroy({ where: { id: Number(matriculaId) } })
            return res.status(200).json({ mensagem: `ID ${matriculaId} deletado` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = PessoaController