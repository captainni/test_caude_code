def broken_function(x, y)
    # 缺少冒号
    result = x + y
    return result
    
def another_broken_function(x)
    # 缺少冒号和未定义变量
    print(undefined_var)
    return x * 2
    
# 语法错误的函数定义
def syntax_error(
    # 缺少参数和冒号
    return "error"