const express = require('express');
const { check, validationResult } = require('express-validator');
const formDataValidate = () => {
    return [
        check('childname').notEmpty().withMessage('Child Name is required').isString().withMessage('Child Name must be Alphanumeric').isLength({ min: 3, max: 30 }).withMessage('Child Name must be between 3 to 30 characters'),
        check('dob').notEmpty().withMessage('Date of Birth is required'),
        check('fathername').notEmpty().withMessage('Father Name is required').isString().withMessage('Father Name must be Alphanumeric').isLength({ min: 3, max: 30 }).withMessage('Father Name must be between 3 to 30 characters'),
        check('FId').notEmpty().withMessage('Father ID is required').isInt().withMessage('Father ID must be Numeric').isLength({ max: 10 }).withMessage('Father ID must be less than 10 characters'),
        check('mothername').notEmpty().withMessage('Mother Name is required').isString().withMessage('Mother Name must be Alphanumeric').isLength({ min: 3, max: 30 }).withMessage('Mother Name must be between 3 to 30 characters'),
        check('MId').notEmpty().withMessage('Mother ID is required').isInt().withMessage('Mother ID must be Numeric').isLength({ max: 10 }).withMessage('Mother ID must be less than 10 characters'),
        check('maiden').notEmpty().withMessage('Maiden Name is required').isString().withMessage('Maiden Name must be Alphanumeric').isLength({ min: 3, max: 30 }).withMessage('Maiden Name must be between 3 to 30 characters'),
        check('hospital').notEmpty().withMessage('Hospital Name is required').isString().withMessage('Hospital Name must be Alphanumeric').isLength({ max: 30 }).withMessage('Hospital Name must be less than 30 characters'),
        check('constituency').notEmpty().withMessage('Constituency Name is required').isString().withMessage('Constituency Name must be Alphanumeric').isLength({ max: 30 }).withMessage('Constituency Name must be less than 30 characters')
    ]
};
/*
const formDataValidate = () => {
    return [
        check('childname').notEmpty().isAlphanumeric().isLength({ min: 3, max: 30 }),
        check('dob').notEmpty().isDate(),
        check('fathername').notEmpty().isAlphanumeric().isLength({ min: 3, max: 30 }),
        check('FId').notEmpty().isAlphanumeric().isLength({ max: 10 }),
        check('mothername').notEmpty().isAlphanumeric().isLength({ min: 3, max: 30 }),
        check('MId').notEmpty().isAlphanumeric().isLength({ max: 10 }),
        check('maiden').notEmpty().isAlphanumeric().isLength({ min: 3, max: 30 }),
        check('hospital').notEmpty().isAlphanumeric().isLength({max: 30}),
        check('constituency').notEmpty().isAlphanumeric().isLength({max: 30}),
    ]
};
*/

module.exports = formDataValidate;