const { body, validationResult } = require('express-validator');

// exports.validateRegister = [
//   body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
//   body('email').isEmail().withMessage('Invalid email'),
//   body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
//     next();
//   },
// ];

exports.validateLogin = [
  body('email').isEmail().withMessage('Invalid email'),
  body('password').exists().withMessage('Password is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

exports.validateTask = [
  body('title').notEmpty().withMessage('Title is required'),
  body('status').optional().isIn(['pending', 'in-progress', 'completed']).withMessage('Invalid status'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];
