import { ExpenseByCategorySummary } from "./../../../client/src/app/state/api";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenseByCategorySummaryRow = await prisma.expenseByCategory.findMany(
      {
        orderBy: {
          date: "desc",
        },
      }
    );
    const expenseByCategorySummary = expenseByCategorySummaryRow.map(
      (item) => ({ ...item, amount: item.amount.toString() })
    );
    res.json(expenseByCategorySummary);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving expenses by category", error });
  }
};
