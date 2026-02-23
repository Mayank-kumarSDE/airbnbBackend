import * as z from "zod";
import logger from "../config/logger.config.js";
import { attachCorrelationIdMiddleware} from '../middleware/corelation.middleware.js'

export const validateRequestBody = (schema) => {
  return async (req, res, next) => {
    try {
      logger.info('Validating request body');
      await schema.parseAsync(req.body);
      logger.info('✓ Request body is valid',); 
      next();
    } catch (err) {
      // Log the actual error to see what it is
      logger.error('Validation error:', err);
      logger.error('Error type:', err.constructor.name);
      
      if (err instanceof z.ZodError) {
        logger.error('ZodError detected, errors array:', err.errors);
        return res.status(400).json({
          status: "fail",
          message: "Validation failed",
          errors: err.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }
      
      // For non-Zod errors
      return res.status(500).json({
        status: "error",
        message: "Internal server error"
      });
    }
  };
};



export const validateRequestParams = (schema) => {
  return async (req, res, next) => {
    try {
      logger.info('Validating request body');
      await schema.parseAsync(req.params);
      logger.info('✓ Request body is valid',); 
      next();
    } catch (err) {
      // Log the actual error to see what it is
      logger.error('Validation error:', err);
      logger.error('Error type:', err.constructor.name);
      
      if (err instanceof z.ZodError) {
        logger.error('ZodError detected, errors array:', err.errors);
        return res.status(400).json({
          status: "fail",
          message: "Validation failed",
          errors: err.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }
      
      // For non-Zod errors
      return res.status(500).json({
        status: "error",
        message: "Internal server error"
      });
    }
  };
};


export const validateRequestquery = (schema) => {
  return async (req, res, next) => {
    try {
      logger.info('Validating request body');
      await schema.parseAsync(req.query);
      logger.info('✓ Request body is valid',); 
      next();
    } catch (err) {
      // Log the actual error to see what it is
      logger.error('Validation error:', err);
      logger.error('Error type:', err.constructor.name);
      
      if (err instanceof z.ZodError) {
        logger.error('ZodError detected, errors array:', err.errors);
        return res.status(400).json({
          status: "fail",
          message: "Validation failed",
          errors: err.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message
          }))
        });
      }
      
      // For non-Zod errors
      return res.status(500).json({
        status: "error",
        message: "Internal server error"
      });
    }
  };
};

