sentence = input()
words = sentence.split()

total_length = 0
for word in words:
    total_length += len(word)
average_length = total_length / len(words)
print(average_length)