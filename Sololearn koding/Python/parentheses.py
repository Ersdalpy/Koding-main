def balanced(expression):
    stack = []
    for char in expression:
        if char == '(':
            stack.insert(0, char)
        elif char == ')':
            if len(stack) == 0 or stack.pop(0) != '(':
                return False
    return len(stack) == 0

expression = input()
if balanced(expression):
    print("True")
else:
    print("False")