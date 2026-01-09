# Write your MySQL query statement below

UPDATE Salary
SET SEX = CHAR(ASCII('m') + ASCII('f') - ASCII(SEX));
