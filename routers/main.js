const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const path = require('path');
const router = Router();

router.get(
    '/',
    async (req, res) => {
        try {
            res.sendFile(path.join(__dirname, '../index.html'));
        } catch (e) {
            res.status(500).send(e);
        }
    }
)

router.post(
    '/accept-form',
    [
        check('date').notEmpty().withMessage('Не хватает данных').isDate().withMessage('Неверные данные в форме'),
        
    ],
    async function (req, res) {
        try {
            const errors = validationResult(req);
            if (req.headers['content-type'] !== 'application/json') {
                throw JSON.stringify({ status: 'error', message: 'Неверный тип данных' });
            }
            if (!errors.isEmpty()) {
                throw JSON.stringify({status: 'error', msg: errors.array()[0].msg});
            }
            res.status(200).json({status: 'ok', data: req.body })
        } catch (e) {
            res.status(400).send(e);
        }
    }
)

module.exports = router;