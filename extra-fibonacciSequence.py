def main():
    for i in range(0, 20):
        f = fibonacci2(i)
        print("Fibonacci(" + str(i) + ") = " + str(f))


# Less optimal code
def fibonacci(n):
    if n == 1 or n == 0:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2);

# More optimal code
def fibonacci2(n):
    # because the first of the fibonacci sequence is zero
    result = 1
    previous = -1
    for i in range(0, n+1):
        sum = result + previous
        previous = result
        result = sum
    return result
main()