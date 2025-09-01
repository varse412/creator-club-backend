import { Router } from 'express';
import { registerCreator } from '../controllers/registerController';
import { editCreator } from '../controllers/editController';
import { deleteCreator } from '../controllers/deleteController';

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - name
 *         - instaHandle
 *         - followersCount
 *         - maxViews
 *         - everHadBrandDeal
 *       properties:
 *         name:
 *           type: string
 *         instaHandle:
 *           type: string
 *         followersCount:
 *           type: string
 *           enum: ['less than 5k', '5-10k', '10-25k', '25-50k', '50k-100k', '100-250k', '250k-500k', '500k-1m', '1m-2m', '2m-5m', '5m-10m', '10m-25m', '25m-50m', '50m+']
 *         maxViews:
 *           type: string
 *           enum: ['less than 10k', '10k+', '50k+', '100k+', '500k+', '1m+', '5m+', '10m+']
 *         everHadBrandDeal:
 *           type: string
 *           enum: ['yes', 'no', "don't want to share"]
 */

/**
 * @swagger
 * /form/register:
 *   post:
 *     summary: Register a new creator
 *     tags: [Form]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       201:
 *         description: Creator registered successfully
 *       400:
 *         description: Validation error
 */
router.post('/register', registerCreator);

/**
 * @swagger
 * /form/edit/{id}:
 *   put:
 *     summary: Edit creator by ID
 *     tags: [Form]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *     responses:
 *       200:
 *         description: Creator updated successfully
 *       400:
 *         description: Validation error
 */
router.put('/edit/:id', editCreator);

/**
 * @swagger
 * /form/delete/{id}:
 *   delete:
 *     summary: Delete creator by ID
 *     tags: [Form]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Creator deleted successfully
 */
router.delete('/delete/:id', deleteCreator);

export default router;